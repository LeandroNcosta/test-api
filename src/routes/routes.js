import { StatusCodes } from "http-status-codes";
import express from 'express'

const routes = express.Router()

let cdz = {
  title: "Saint Seiya",
  creator: "Masami Kurumada",
  list: [
    {
      title: "Saint Seiya: Sanctuary Arc",
      release: "01/1986",
      type: "Manga",
      id: "1"
    },
    {
      title: "Saint Seiya: Sanctuary Arc (TV)",
      release: "10/1986",
      type: "Anime",
      id: "2"
    },
    {
      title: "Memorial Story: Shaka",
      release: "02/1987",
      type: "Extra",
      id: "3"
    },
    {
      title: "Saint Seiya: Jeshin Eris",
      release: "07/1987",
      type: "Movie",
      id: "4"
    },
    {
      title: "Nebula Chain - Kyoudai no Kizuna",
      release: "07/1987",
      type: "Extra",
      id: "4"
    },
    {
      title: "Saint Seiya - Ougon Densetsu",
      release: "08/1987",
      type: "Game",
      id: "5"
    },
    {
      title: "Kamigami no atsuki Tatakai",
      release: "09/1988",
      type: "Movie",
      id: "6"
    },
    {
      title: "Saint Seiya: Poseidon Arc",
      release: "03/1988",
      type: "Manga",
      id: "7"
    },
    {
      title: "Saint Seiya: Asgard Arc",
      release: "04/1988",
      type: "Anime",
      id: "8"
    },
    {
      title: "Ougon Densetsu Kanketsu Hen",
      release: "05/1988",
      type: "Game",
      id: "9"
    },
    {
      title: "Shinku no Shonen Densetsu",
      release: "07/1988",
      type: "Movie",
      id: "10"
    },
    {
      title: "Saint Seiya Cosmo Special/ Hipermito",
      release: "08/1988",
      type: "Extra",
      id: "11"
    },
    {
      title: "CYGNUS STORY: Kori no Kuni no Natasha",
      release: "11/1988",
      type: "Manga",
      id: "12"
    },
    {
      title: "Saint Seiya: Poseidon Arc (TV)",
      release: "11/1988",
      type: "Anime",
      id: "13"
    },
    {
      title: "Saga! Yabô no Jokyoku",
      release: "12/1988",
      type: "Extra",
      id: "14"
    },
    {
      title: "Saint Seiya: Hades Arc - Sanctuary",
      release: "02/1989",
      type: "Manga",
      id: "15"
    },
    {
      title: "Seishu Seisen no Senshitachi",
      release: "03/1989",
      type: "Movie",
      id: "16"
    },
    {
      title: "Athena! Ooi Naru Ai",
      release: "04/1989",
      type: "Extra",
      id: "17"
    },
    {
      title: "Saint Seiya: Hades Arc - Inferno",
      release: "11/1989",
      type: "Manga",
      id: "18"
    },
    {
      title: "Saint Seiya: Hades Arc - Elysium",
      release: "07/1990",
      type: "Manga",
      id: "19"
    },
    {
      title: "Saint Paradise",
      release: "06/1991",
      type: "Manga",
      id: "20"
    },
    {
      title: "Saint Seiya Paradise: Saikyou no Senshi Tachi",
      release: "11/1992",
      type: "Game",
      id: "21"
    },
    {
      title: "Do Cvidanija: Time Of Promisse",
      release: "01/1997",
      type: "Extra",
      id: "22"
    },
    {
      title: "Saint Seiya: Gigantomachia",
      release: "08/2002",
      type: "Extra",
      id: "23"
    },
    {
      title: "Saint Seiya: Hades Arc Sanctuary (TV)",
      release: "11/2002",
      type: "Anime",
      id: "24"
    },
    {
      title: "Saint Seiya Typing Ryu Sei Ken",
      release: "12/2002",
      type: "Game"
    },
    {
      title: "Episodio G",
      release: "06/2003",
      type: "Manga",
      id: "25"
    },
    {
      title: "Saint Seiya Ougon Densetsu Hen Perfect Edition",
      release: "07/2003",
      type: "Game",
      id: "26"
    },
    {
      title: "Tenkai-hen Josô - Overture - Introduction",
      release: "02/2004",
      type: "Manga",
      id: "27"
    },
    {
      title: "Tenkai-hen: Josô Overture",
      release: "02/2004",
      type: "Movie",
      id: "28"
    },
    {
      title: "Chapter Sanctuary",
      release: "04/2005",
      type: "Game",
      id: "29"
    },
    {
      title: "Saint Seiya: Hades Arc - Inferno (TV)",
      release: "12/2005",
      type: "Anime",
      id: "30"
    },
    {
      title: "Next Dimension",
      release: "04/2006",
      type: "Manga",
      id: "31"
    },
    {
      title: "Lost Canvas",
      release: "08/2006",
      type: "Manga",
      id: "32"
    },
    {
      title: "The Hades",
      release: "02/2007",
      type: "Game",
      id: "33"
    },
    {
      title: "Saint Seiya: Hades Arc Elysium (TV)",
      release: "06/2007",
      type: "Anime",
      id: "34"
    },
    {
      title: "Episode G Gaiden",
      release: "05/2008",
      type: "Manga",
      id: "35"
    },
    {
      title: "Lost Canvas (TV)",
      release: "06/2009",
      type: "Anime",
      id: "36"
    },
    {
      title: "Saint Seiya Sanctuary Battle",
      release: "11/2011",
      type: "Game",
      id: "37"
    },
    {
      title: "Saint Seiya Omega",
      release: "04/2012",
      type: "Anime",
      id: "38"
    },
  ]
}

routes.get("/", (request, response) => {
  return response.send(`<h1>CDZ</h1>`)
})

routes.get("/api", (request, response) => {
  return response.status(StatusCodes.OK).send(cdz)
})

export { routes }