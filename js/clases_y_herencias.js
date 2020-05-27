/*  ********************************
 * @title Ejercicio clases y herencias
 * @version 0.0.1
 * @author Tomeu Barceló
 ******************************** */

class footballTeam {

    //constructor
    constructor(nameTeam, coach, fundation, stadium) {
        this.nameTeam = nameTeam;
        this.coach = coach;
        this.fundation = fundation;
        this.stadium = stadium;
    }

    //métodos
    detalles() {
        console.log("El equipo de fútbol " + this.nameTeam + " se fundó en " + this.fundation + ". Su estadio es " + this.stadium +
            " y su actual entrenador es " + this.coach);
    }
}

//1a herencia
class championsLeagueWinners extends footballTeam {
    constructor(nameTeam, coach, fundation, stadium, campeonatosChampions) {
        super(nameTeam, coach, fundation, stadium);
        this.campeonatosChampions = campeonatosChampions;
    }
}

//Instancia de footballTeam
var rcdMallorca = new footballTeam("RCD Mallorca", "Vicente Moreno", 1916, "Son Moix");
rcdMallorca.detalles();

var fcBarcelona = new championsLeagueWinners("FC Barcelona", "Quique Setién", 1899, "Camp Nou", 5);
fcBarcelona.detalles();