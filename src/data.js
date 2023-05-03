import { bicycleOutline, fastFoodOutline, filmOutline, newspaperOutline, settingsOutline, libraryOutline, schoolOutline, fileTrayFull } from "ionicons/icons";

export const topics = [
	{
		header: "Servicios Escolares",
		color: "primary",
		icon: schoolOutline,
		options: [
			{
				label: "Plan de Estudios",
                icon: fileTrayFull
			},
			{
				label: "Materia Plan de Estudios",
                icon: fileTrayFull
			},
			{
				label: "Grupos",
                icon: fileTrayFull
			},
			{
				label: "Grupos Materias",
                icon: fileTrayFull
			}
		]
	},
	{
		header: "Catálogos",
		color: "success",
		icon: libraryOutline,
		options: [
			{
				label: "carreras",
                icon: fileTrayFull,
                url: '/page/carreras',
			},
			{
				label: "Materias",
                icon: fileTrayFull,
                url: '/page/materias',
			},
			{
				label: "Unidades Académicas",
                icon: fileTrayFull,
                url: '/page/uacademicas',
			},
			{
				label: "Alumnos",
                icon: fileTrayFull,
                url: '/page/alumnos',
			},
			{
				label: "Empleados",
                icon: fileTrayFull,
                url: '/page/empleados',
			}
		]
	},
	{
		header: "Configuración",
		color: "warning",
		icon: settingsOutline,
		options: [
			{
				label: "Lenguas Indigenas",
                icon: newspaperOutline,
                url: '/page/lenguas',
			},
			{
				label: "Sistema Nacional de Investigadores",
                icon: newspaperOutline,
                url: '/page/investigadores',
			},
			{
				label: "Plazas",
                icon: newspaperOutline,
                url: '/page/plazas',
			},
			{
				label: "Categorías de Plazas",
                icon: newspaperOutline,
                url: '/page/categorias',
			},
			{
				label: "Modelos de Plazas",
                icon: newspaperOutline,
                url: '/page/modelos',
			},
			{
				label: "Funciones",
                icon: newspaperOutline,
                url: '/page/funciones',
			},
			{
				label: "Grupos Etnicos",
                icon: newspaperOutline,
                url: '/page/gpoetnicos',
			},

		]
	}

];

export const categoriaSNI = [
	{
		num: "1",
		text: "Investigador Nacional Nivel 1"
	},
	{
		num: "2",
		text: "Investigador NAcional Nivel 2"
	},
	{
		num: "3",
		text: "Investigador Nacional Nivel 3"
	},
	{
		num: "4",
		text: "Investigador Nacional Emérito"
	},
];


export const areasEspecialidad = [
	{
		num: "1",
		text: "Música Michoacana"
	},
	{
		num: "2",
		text: "Diseño Artesanal"
	},
	{
		num: "3",
		text: "Gestión del patrimonio Cultural"
	},
	{
		num: "4",
		text: "Agroecología y manejo de Recursos Materiales"
	},
	{
		num: "5",
		text: "Turismo Alternativo"
	},
];

export const lenguas =[
	{
		num: "1",
		text: "Español"
	},
	{
		num: "2",
		text: "P'urhepecha"
	},
	{
		num: "3",
		text: "Náhuatl"
	},
	{
		num: "4",
		text: "Mazahua"
	},
	{
		num: "5",
		text: "Otomí"
	},
	{
		num: "6",
		text: "Amuzgo"
	},
	{
		num: "7",
		text: "Chichimeco"
	},
	{
		num: "8",
		text: "Cora"
	},
	{
		num: "9",
		text: "Huichol"
	},
	{
		num: "10",
		text: "Maseaul"
	},
	{
		num: "11",
		text: "Matlatzinca"
	},
	{
		num: "12",
		text: "Maya"
	},
	{
		num: "13",
		text: "Mazateco"
	},
	{
		num: "15",
		text: "Mixteco"
	},
	{
		num: "16",
		text: "Tarahumara"
	},
	{
		num: "17",
		text: "Tlahuica"
	},
	{
		num: "18",
		text: "Tlapaneco"
	},
	{
		num: "19",
		text: "Tseltal"
	},
	{
		num: "20",
		text: "Tzeltal"
	},
	{
		num: "21",
		text: "Yaqui"
	},
	{
		num: "22",
		text: "Zapoteco"
	},
	{
		num: "23",
		text: "Zoque"
	},

];

export const ejesFormativos =[
	{
		num: "1",
		text: "Eje Ecológico ambiental"
	},
	{
		num: "2",
		text: "Eje Lógico matemático"
	},
	{
		num: "3",
		text: "Eje Social cultural"
	},
	{
		num: "4",
		text: "Eje Político económico"
	},
	{
		num: "5",
		text: "Eje Lengua"
	},
	{
		num: "6",
		text: "Eje Metodológico"
	},
	{
		num: "7",
		text: "Eje Básico de arte"
	},
	{
		num: "8",
		text: "Eje de gestión cultural"
	},
	{
		num: "9",
		text: "Eje disciplinar"
	},
	{
		num: "10",
		text: "Eje de vinculación Comunitaria"
	},
	{
		num: "11",
		text: "Eje axiológico"
	},
	{
		num: "12",
		text: "Eje de interculturalidad"
	},

];

export const semestres = [
	{
		num: "1",
		text: "Primer Semestre"
	},
	{
		num: "2",
		text: "Segundo Semestre"
	},
	{
		num: "3",
		text: "Tercer Semestre"
	},
	{
		num: "4",
		text: "Cuarto Semestre"
	},
	{
		num: "5",
		text: "Qinto Semestre"
	},
	{
		num: "6",
		text: "Sexto Semestre"
	},
	{
		num: "7",
		text: "Septimo Semestre"
	},
	{
		num: "8",
		text: "Octavo Semestre"
	},
	{
		num: "9",
		text: "Noveno Semestre"
	},
	{
		num: "10",
		text: "Decimo Semestre"
	},
	{
		num: "11",
		text: "Onceavo Semestre"
	},
	{
		num: "12",
		text: "Doceavo Semestre"
	},
	{
		num: "13",
		text: "Treceavo Semestre"
	},

];