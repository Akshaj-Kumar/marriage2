/**
 * Wedding Audio Engine for Thanu & Jathu - Alex Warren "Ordinary"
 * 
 * Works seamlessly across local dev and production subpaths!
 * Auto-plays smoothly on load and unlocks on first user gesture!
 */

class WeddingAudioEngine {
  constructor() {
    this.audioElement = null;
    this.ctx = null;
    this.isPlaying = false;
    this.listeners = new Set();
    this.initialized = false;
  }

  getAudioSrc() {
    if (typeof window !== 'undefined') {
      const path = window.location.pathname;
      if (path.includes('/marriage2')) {
        return '/marriage2/audio/ordinary.mp3';
      }
    }
    const base = (typeof import.meta !== 'undefined' && import.meta.env && import.meta.env.BASE_URL) 
      ? import.meta.env.BASE_URL 
      : './';
    const cleanBase = base.endsWith('/') ? base : `${base}/`;
    return `${cleanBase}audio/ordinary.mp3`;
  }

  init() {
    if (this.initialized) return;
    this.initialized = true;

    if (typeof window !== 'undefined') {
      let existing = document.getElementById('wedding-audio');
      if (existing) {
        this.audioElement = existing;
      } else {
        this.audioElement = new Audio();
        this.audioElement.id = 'wedding-audio';
        this.audioElement.src = this.getAudioSrc();
        this.audioElement.loop = true;
        this.audioElement.preload = 'auto';
        document.body.appendChild(this.audioElement);
      }

      if (!this.audioElement.src || this.audioElement.src.endsWith('/')) {
        this.audioElement.src = this.getAudioSrc();
      }

      this.isPlaying = !this.audioElement.paused;

      this.audioElement.addEventListener('playing', () => {
        this.isPlaying = true;
        this.notify();
      });

      this.audioElement.addEventListener('pause', () => {
        this.isPlaying = false;
        this.notify();
      });

      this.audioElement.addEventListener('error', (e) => {
        console.warn('Audio fallback triggered:', e);
        if (this.audioElement.src.includes('/marriage2/')) {
          this.audioElement.src = './audio/ordinary.mp3';
          this.play().catch(() => {});
        }
      });

      window.addEventListener('wedding-audio-started', () => {
        this.isPlaying = true;
        this.notify();
      });
    }

    if (!this.ctx && typeof window !== 'undefined') {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
  }

  subscribe(callback) {
    this.listeners.add(callback);
    callback({ isPlaying: this.isPlaying });
    return () => this.listeners.delete(callback);
  }

  notify() {
    this.listeners.forEach(cb => cb({ isPlaying: this.isPlaying }));
  }

  autoStart() {
    this.init();

    if (this.audioElement && !this.audioElement.paused) {
      this.isPlaying = true;
      this.notify();
      return;
    }

    // 1. Try immediate unprompted playback
    this.play().then(() => {
      this.isPlaying = true;
      this.notify();
    }).catch(() => {
      // 2. Browser blocked unprompted autoplay -> trigger on very first gesture
      const unlockAndPlay = () => {
        if (!this.audioElement || !this.audioElement.paused) {
          this.isPlaying = true;
          this.notify();
          cleanup();
          return;
        }

        this.play().then(() => {
          this.isPlaying = true;
          this.notify();
          cleanup();
        }).catch(() => {});
      };

      const events = ['click', 'touchstart', 'touchend', 'pointerdown', 'pointerup', 'keydown'];
      const cleanup = () => {
        events.forEach(e => {
          window.removeEventListener(e, unlockAndPlay, true);
          document.removeEventListener(e, unlockAndPlay, true);
        });
      };

      events.forEach(e => {
        window.addEventListener(e, unlockAndPlay, { capture: true, passive: true });
        document.addEventListener(e, unlockAndPlay, { capture: true, passive: true });
      });
    });
  }

  async play() {
    this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      await this.ctx.resume().catch(() => {});
    }

    if (this.audioElement) {
      try {
        await this.audioElement.play();
        this.isPlaying = true;
        this.notify();
      } catch (err) {
        throw err;
      }
    }
  }

  pause() {
    if (this.audioElement) {
      this.audioElement.pause();
    }
    this.isPlaying = false;
    this.notify();
  }

  toggle() {
    this.init();
    if (this.isPlaying) {
      this.pause();
    } else {
      this.play().catch(() => {});
    }
  }

  // Royal bell chime for interactive buttons and seal breaking
  playRoyalChime() {
    try {
      if (!this.ctx) {
        const AudioCtx = window.AudioContext || window.webkitAudioContext;
        if (AudioCtx) this.ctx = new AudioCtx();
      }
      if (this.ctx && this.ctx.state === 'suspended') {
        this.ctx.resume().catch(() => {});
      }
      if (!this.ctx) return;

      const notes = [587.33, 739.99, 880, 1174.66];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        const startTime = this.ctx.currentTime + (idx * 0.08);

        osc.type = 'sine';
        osc.frequency.setValueAtTime(freq, startTime);

        gain.gain.setValueAtTime(0.14, startTime);
        gain.gain.exponentialRampToValueAtTime(0.0001, startTime + 0.9);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start(startTime);
        osc.stop(startTime + 0.95);
      });
    } catch {}
  }
}

export const weddingAudio = new WeddingAudioEngine();
