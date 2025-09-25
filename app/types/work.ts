import * as THREE from "three";

export interface WorkTimelinePoint {
  point: THREE.Vector3,
  year: string,
  title: string;
  fontSize?: number;
  subtitle?: string,
  position: 'left' | 'right' | 'bottom',
}