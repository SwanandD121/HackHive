from bs4 import BeautifulSoup as bs
import requests
from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from webdriver_manager.chrome import ChromeDriverManager
import time

options = Options()
options.add_argument("--headless")
# options.add_argument("window-size=1400,1500")
# options.add_argument("--disable-gpu")
# options.add_argument("--no-sandbox")
# options.add_argument("start-maximized")
# options.add_argument("enable-automation")
# options.add_argument("--disable-infobars")
# options.add_argument("--disable-dev-shm-usage")

def scrapeDevpost():
    url = "https://devpost.com/hackathons?open_to[]=public&status[]=upcoming&status[]=open"
    driver = webdriver.Chrome(service=Service(ChromeDriverManager().install()), options=options)
    driver.get(url)
    reachedBottom = False
    while(not reachedBottom):
        source = driver.page_source
        soup = bs(source, "html.parser")
        hackathonContainer = soup.find("div", attrs={"class": "hackathons-container"})
        driver.execute_script("window.scrollBy(0, 2000)")
        endOfSearch = hackathonContainer.find("p", attrs={"class": "faded"})
        if(endOfSearch != None):
            reachedBottom = True
            break
        time.sleep(2)
    soup = bs(source, "html.parser")
    hackathonContainer = soup.find("div", attrs={"class": "hackathons-container"})
    hackthonDivs = hackathonContainer.find_all("div", attrs={"class": "hackathon-tile"})
    hackathons = []
    for div in hackthonDivs:
        isFeatured = False
        checkFeaturedDiv = div.find_all("a", attrs={"class": "featured-tab"})
        if(len(checkFeaturedDiv) > 0):
            isFeatured = True
        hackathonLink = div.find("a").get("href")
        hackathonImage = div.find("img").get("src")
        if(hackathonImage[:2] == "//"):
            hackathonImage = "https:" + hackathonImage
        hackathonName = div.find("h3").text
        hackathonDate = div.find("div", attrs={"class": "submission-period"}).text
        hackathonLocation = div.find("div", attrs={"class": "info"}).text
        prizes = div.find("span", attrs={"class": "prize-amount"}).text
        hackathonStatus = div.find("div", attrs={"class": "hackathon-status"}).text
        participants = div.find("div", attrs={"class": "participants"}).text
        themesDiv = div.find("div", attrs={"class": "themes"})
        themeTags = themesDiv.find_all("span", attrs={"class": "theme-label"})
        themes = []
        themeText = ""
        for tag in themeTags:
            themes.append(tag.text.strip())
            themeText += tag.text + ", "
        hackathon = {
            "link": hackathonLink.strip(),
            "name": hackathonName.strip(),
            "date": hackathonDate.strip(),
            "image": hackathonImage,
            "location": hackathonLocation.strip(),
            "prizes": prizes,
            "participants": participants.replace(" participants", "").replace(" participant", "").strip(),
            "themes": themes,
            "status": hackathonStatus.strip(),
            "featured": isFeatured,
            "source": "Devpost"
        }
        hackathons.append(hackathon)
        
        # print(hackathonLink + "\n" +  hackathonName + "\n" + hackathonDate + "\n" + hackathonLocation + "\n" + prizes + "\n" + participants + "\n" + themeText + "\n\n")
    driver.quit()
    return hackathons