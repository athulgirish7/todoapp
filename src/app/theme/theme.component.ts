import { Component, OnInit } from '@angular/core';

interface Theme {
  id: number;
  text: string;
  icon: string;
}

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.scss'],
})
export class ThemeComponent implements OnInit {
  theme: Theme = {
    id: 1,
    text: 'light',
    icon: 'assets/icons/light-theme.svg',
  };

  themeDropdownData: Theme[] = [
    {
      id: 1,
      text: 'light',
      icon: 'assets/icons/light-theme.svg',
    },
    {
      id: 0,
      text: 'dark',
      icon: 'assets/icons/dark-theme.svg',
    },
  ];

  ngOnInit(): void {
    this.setTheme();
    this.theme = this.currentTheme;
  }

  onThemeChange(theme: Theme) {
    this.theme = theme;
    if (theme.id === 0) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
    this.setTheme();
  }

  get currentTheme() {
    return localStorage.getItem('theme') === 'dark'
      ? { id: 0, text: 'dark', icon: 'assets/icons/dark-theme.svg' }
      : this.theme;
  }

  setTheme() {
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }
}
