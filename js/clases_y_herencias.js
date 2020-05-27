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
    constructor(nameTeam, coach, fundation, stadium, campeonatosChampions, pichichiChampions) {
        super(nameTeam, coach, fundation, stadium);
        this.campeonatosChampions = campeonatosChampions;
        this.pichichiChampions = pichichiChampions;
    }

    //metodos
    detallesChampions() {
        console.log("El equipo de fútbol " + this.nameTeam + " se fundó en " + this.fundation + ". Su estadio es " + this.stadium +
            " y su actual entrenador es " + this.coach + ". Tiene " + this.campeonatosChampions + " campeonatos de la Champions League.");
    }

    detallesGoleadorChampions() {
        if (this.nameTeam == "Real Madrid") {
            this.pichichiChampions = "Cristiano Ronaldo";
        } else {
            this.pichichiChampions = "Leo Messi";
        }
        console.log(this.pichichiChampions + " es el máximo goleador en la historia del " + this.nameTeam + " en la Champions League");
    }
}

//2a herencia
class europaLeagueWinners extends footballTeam {
    constructor(nameTeam, coach, fundation, stadium, campeonatosEuropaLeague, ultimoTitulo) {
        super(nameTeam, coach, fundation, stadium);
        this.campeonatosEuropaLeague = campeonatosEuropaLeague;
        this.ultimoTitulo = ultimoTitulo;
    }

    //metodos
    detallesEuropaLeague() {
        console.log("El equipo de fútbol " + this.nameTeam + " se fundó en " + this.fundation + ". Su estadio es " + this.stadium +
            " y su actual entrenador es " + this.coach + ". Tiene " + this.campeonatosEuropaLeague + " campeonatos de la Europa League.");
    }

    detallesUltimoTitulo() {
        console.log("El ultimo titulo conseguido por el " + this.nameTeam + " en la Europa League fue en el año " + this.ultimoTitulo);
    }
}

//Instancias
var rcdMallorca = new footballTeam("RCD Mallorca", "Vicente Moreno", 1916, "Son Moix");
rcdMallorca.detalles();

var fcBarcelona = new championsLeagueWinners("FC Barcelona", "Quique Setién", 1899, "Camp Nou", 5);
fcBarcelona.detallesChampions();
fcBarcelona.detallesGoleadorChampions();

var realMadrid = new championsLeagueWinners("Real Madrid", "Zidane", 1902, "Santiago Bernabeu", 13);
realMadrid.detallesChampions();
realMadrid.detallesGoleadorChampions();

var atleticoDeMadrid = new europaLeagueWinners("Atlético de Madrid", "Cholo Simeone", 1903, "Wanda Metropolitano", 3, 2018);
atleticoDeMadrid.detallesEuropaLeague();
atleticoDeMadrid.detallesUltimoTitulo();

var sevilla = new europaLeagueWinners("Sevilla FC", "Julen Lopetegui", 1890, "Sanchez Pizjuan", 5, 2016);
sevilla.detallesEuropaLeague();
sevilla.detallesUltimoTitulo();