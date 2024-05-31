// src/RoomScene.js
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { Canvas, useFrame, extend, useThree } from '@react-three/fiber';
import { OrbitControls } from 'three-stdlib';

extend({ OrbitControls });

const Room = () => {
    const groupRef = useRef();

    useEffect(() => {
        const roomWidth = 32;
        const roomLength = 32;
        const roomHeight = 10;

        const scene = groupRef.current;

        // Floor
        const floorGeometry = new THREE.PlaneGeometry(roomWidth, roomLength);
        const floorMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
        const floor = new THREE.Mesh(floorGeometry, floorMaterial);
        floor.rotation.x = -Math.PI / 2;
        scene.add(floor);

        // Walls
        const wallMaterial = new THREE.MeshBasicMaterial({ color: 0xD3D3D3, side: THREE.DoubleSide });
        const wallGeometry = new THREE.PlaneGeometry(roomWidth, roomHeight);

        const wall1 = new THREE.Mesh(wallGeometry, wallMaterial);
        wall1.position.set(0, roomHeight / 2, -roomLength / 2);
        scene.add(wall1);

        const wall2 = new THREE.Mesh(wallGeometry, wallMaterial);
        wall2.rotation.y = Math.PI / 2;
        wall2.position.set(roomWidth / 2, roomHeight / 2, 0);
        scene.add(wall2);

        const wall3 = wall2.clone();
        wall3.position.set(-roomWidth / 2, roomHeight / 2, 0);
        scene.add(wall3);

        const wall4 = wall1.clone();
        wall4.position.set(0, roomHeight / 2, roomLength / 2);
        scene.add(wall4);

        // Helper function for random positions
        function randomPosition() {
            return {
                x: (Math.random() - 0.5) * roomWidth,
                y: 0,
                z: (Math.random() - 0.5) * roomLength
            };
        }

        // Adding objects
        function createTable() {
            const tableGeometry = new THREE.BoxGeometry(2, 0.1, 1);
            const tableMaterial = new THREE.MeshBasicMaterial({ color: 0x8B4513 });
            const table = new THREE.Mesh(tableGeometry, tableMaterial);
            const pos = randomPosition();
            table.position.set(pos.x, 0.5, pos.z);
            scene.add(table);
        }

        function createChair() {
            const chairGeometry = new THREE.BoxGeometry(0.5, 1, 0.5);
            const chairMaterial = new THREE.MeshBasicMaterial({ color: 0x0000FF });
            const chair = new THREE.Mesh(chairGeometry, chairMaterial);
            const pos = randomPosition();
            chair.position.set(pos.x, 0.5, pos.z);
            scene.add(chair);
        }

        function createLamp() {
            const lampGeometry = new THREE.CylinderGeometry(0.1, 0.1, 2);
            const lampMaterial = new THREE.MeshBasicMaterial({ color: 0xFFFF00 });
            const lamp = new THREE.Mesh(lampGeometry, lampMaterial);
            const pos = randomPosition();
            lamp.position.set(pos.x, 1, pos.z);
            scene.add(lamp);
        }

        createTable();
        createChair();
        createLamp();
    }, []);

    return <group ref={groupRef}></group>;
};

const CameraControls = () => {
    const { camera, gl } = useThree();
    const controls = useRef();
    useFrame(() => controls.current.update());
    return <orbitControls ref={controls} args={[camera, gl.domElement]} />;
};

const RoomScene = () => {
    return (
        <Canvas>
            <ambientLight intensity={0.5} />
            <pointLight position={[10, 10, 10]} />
            <CameraControls />
            <Room />
        </Canvas>
    );
};

export default RoomScene;
