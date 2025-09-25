import * as THREE from "three";
import { WorkTimelinePoint } from "../types";

export const WORK_TIMELINE: WorkTimelinePoint[] = [
  {
    point: new THREE.Vector3(0, -4, 4),
    year: '2022-2026',
    title: 'JECRC University',
    fontSize: 0.4,
    subtitle: 'CSE(AiML)',
    position: 'bottom',
  },
  {
    point: new THREE.Vector3(-4, -4, -3),
    year: '2025',
    title: 'Xebia',
    subtitle: 'Ai intern',
    position: 'left',
  },
  
  
  {
    point: new THREE.Vector3(1, 1, -12),
    year: new Date().toLocaleDateString('default', { year: 'numeric' }),
    title: '?',
    subtitle: '???',
    position: 'right',
  }
]