import { bicycleOutline, fastFoodOutline, filmOutline, gameControllerOutline, libraryOutline, schoolOutline, fileTrayFull } from "ionicons/icons";

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
                url: '/page/Carreras',
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
	}
];