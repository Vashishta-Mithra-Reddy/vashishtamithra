'use client';

import { GodRays, MeshGradient } from '@paper-design/shaders-react';
import { useTheme } from 'next-themes';

export default function GlobalBackground() {
    const { theme } = useTheme();
    return (
        <div className="fixed inset-0 -z-10 pointer-events-none">
        <GodRays
            colors={[theme === "dark" ? "#ffffff1f" : "#0000001f", theme === "dark" ? "#ffffff3d" : "#0000003d", theme === "dark" ? "#ffffff29" : "#00000029"]}
            colorBack={theme === "dark" ? "#000000" : "#ffffff"}
            colorBloom={theme === "dark" ? "#ededed" : "#000000"}
            bloom={1}
            intensity={0.79}
            density={0.07}
            spotty={0.25}
            midSize={0.1}
            midIntensity={0.75}
            speed={0.5}
            offsetY={-0.67}
            offsetX={-1}
            className="w-full h-full"
            />
        </div>
    );
}