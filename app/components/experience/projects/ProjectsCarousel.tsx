import { useEffect, useMemo, useState } from "react";
import { isMobile } from "react-device-detect";
import ProjectTile from "./ProjectTile";

import { PROJECTS } from "@constants";
import { usePortalStore } from "@stores";

const ProjectsCarousel = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const isActive = usePortalStore((state) => state.activePortalId === "projects");

  useEffect(() => {
    if (!isActive) setActiveId(null);
  }, [isActive]);

  const onClick = (id: number) => {
    if (!isMobile) return;
    setActiveId(id === activeId ? null : id);
  };

  const fov = Math.PI * 1.15; // Spread slightly wider to accommodate more projects
  const distance = 18; // Increased distance to prevent overlaps

  const tiles = useMemo(() => {
    const count = PROJECTS.length;

    return PROJECTS.map((project, i) => {
      // Use count - 1 to distribute tiles symmetrically from 0 to fov
      const angle = (fov / (count - 1)) * i;
      const z = -distance * Math.sin(angle);
      const x = -distance * Math.cos(angle);
      const rotY = Math.PI / 2 - angle;

      return (
        <ProjectTile
          key={i}
          project={project}
          index={i}
          position={[x, 1, z]}
          rotation={[0, rotY, 0]}
          activeId={activeId}
          onClick={() => onClick(i)}
        />
      );
    });
  }, [activeId, isActive]);

  // Center the carousel dynamically based on the fov
  const groupRotationY = Math.PI / 2 - fov / 2;

  return (
    <group rotation={[0, groupRotationY, 0]}>
      {tiles}
    </group>
  );
};

export default ProjectsCarousel;