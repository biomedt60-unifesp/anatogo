import type { ISourceOptions } from '@tsparticles/engine'

/** Mesmas opções da intro do alzheimer-site (rede branca sobre o cérebro). */
export function getLoadingParticleOptions(): ISourceOptions {
  return {
    fullScreen: { enable: false, zIndex: 0 },
    fpsLimit: 60,
    detectRetina: true,
    background: {
      color: { value: 'transparent' },
    },
    interactivity: {
      events: {
        onHover: {
          enable: false,
          mode: 'repulse',
          parallax: { enable: false, force: 2, smooth: 10 },
        },
        onClick: { enable: false },
        resize: { enable: true, delay: 0 },
      },
    },
    particles: {
      number: {
        value: 130,
        density: {
          enable: true,
          width: 700,
          height: 700,
        },
      },
      color: { value: '#ffffff' },
      shape: { type: 'circle' },
      opacity: {
        value: { min: 0.12, max: 0.92 },
        animation: {
          enable: true,
          speed: { min: 0.35, max: 1.1 },
          sync: false,
        },
      },
      size: {
        value: { min: 0.5, max: 2.2 },
        animation: {
          enable: true,
          speed: { min: 2, max: 5 },
          sync: false,
        },
      },
      links: {
        enable: true,
        distance: 48,
        color: '#ffffff',
        opacity: 0.22,
        width: 0.3,
        triangles: { enable: false },
      },
      move: {
        enable: true,
        speed: { min: 0.12, max: 0.48 },
        direction: 'none',
        random: true,
        straight: false,
        outModes: { default: 'bounce' },
      },
    },
  }
}
