import {
  Component,
  AfterViewInit,
  OnInit
} from '@angular/core';

import Typed from 'typed.js';
import * as AOS from 'aos';

@Component({
  selector: 'app-portafolio',
  templateUrl: './portafolio.component.html',
  styleUrls: ['./portafolio.component.css']
})
export class PortafolioComponent implements OnInit, AfterViewInit {

  isDark = true;

  stats = [
    {
      value: '10+',
      title: 'Proyectos'
    },
    {
      value: '4+',
      title: 'Años de experiencia'
    },
    {
      value: '10+',
      title: 'Tecnologías'
    }
  ];

  technologies = [
    'Angular',
    'Java',
    'Spring Boot',
    'Git',
    'GitHub',
    'Docker',
    'SQL',
    'Flutter',
    'Node',
    'Microservicios',
    'Jest'
  ];

  projects = [
    {
      title: 'Sistema Empresarial',
      description: 'Proyecto realizado en Angular, Microservicio en Java para la interacción con la base de datos'
    },
    {
      title: 'Aplicaciones Moviles',
      description: 'Aplicaciones en Flutter con interfaz interactiva y consumo de APIs'
    },
    {
      title: 'GitHub Pages CI/CD',
      description: 'Deploy automático con workflows en Actions'
    }
  ];

  toggleTheme(): void {
    this.isDark = !this.isDark;
  }

  ngOnInit(): void {
    AOS.init({
      duration: 1000,
      once: true
    });
  }

  ngAfterViewInit(): void {

    new Typed('#typed-text', {
      strings: [
        'Full Stack Developer',
        'Angular Developer',
        'Java Developer',
        'Ciberseguridad',
        'Flutter Developer'
      ],
      typeSpeed: 60,
      backSpeed: 40,
      loop: true
    });

  }

  descargarCV(){
    window.open('https://drive.google.com/file/d/1uiZHaRI7ekNUsKiQolAFIF6t9ytun9FZ/view?usp=sharing', '_blank');
  }
}