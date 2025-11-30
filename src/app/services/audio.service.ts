import { Injectable } from '@angular/core';
import { CLOCK_CONSTANTS } from '../constants/clock.constants';

/**
 * Service for playing audio notifications
 */
@Injectable({
  providedIn: 'root',
})
export class AudioService {
  /**
   * Plays a notification sound using Web Audio API
   */
  playNotification(): void {
    try {
      const audioContext = new AudioContext();
      const oscillator = audioContext.createOscillator();
      const gainNode = audioContext.createGain();

      oscillator.connect(gainNode);
      gainNode.connect(audioContext.destination);

      oscillator.frequency.value = CLOCK_CONSTANTS.AUDIO.FREQUENCY;
      oscillator.type = CLOCK_CONSTANTS.AUDIO.TYPE;

      gainNode.gain.setValueAtTime(CLOCK_CONSTANTS.AUDIO.GAIN, audioContext.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(
        0.01,
        audioContext.currentTime + CLOCK_CONSTANTS.AUDIO.DURATION
      );

      oscillator.start(audioContext.currentTime);
      oscillator.stop(audioContext.currentTime + CLOCK_CONSTANTS.AUDIO.DURATION);
    } catch (error) {
      console.error('Error playing audio notification:', error);
    }
  }
}
