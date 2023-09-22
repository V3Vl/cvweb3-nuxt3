<template>
    <!-- 3D模型容器 -->
    <div ref="container"></div>
</template>
  
<script>
import * as THREE from 'three';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

export default {
    mounted() {
        // 渲染3D模型
        this.renderModel();
    },
    methods: {
        renderModel() {
            const container = this.$refs.container;

            // 创建一个场景
            const scene = new THREE.Scene();

            // 创建相机
            const camera = new THREE.PerspectiveCamera(75, container.clientWidth / container.clientHeight, 0.1, 1000);
            camera.position.z = 5;

            // 创建渲染器
            const renderer = new THREE.WebGLRenderer();
            renderer.setSize(container.clientWidth, container.clientHeight);
            container.appendChild(renderer.domElement);

            // 创建加载器
            const loader = new FBXLoader();

            // 加载FBX模型
            loader.load('assets/StrutWalking.fbx', (fbx) => {
                scene.add(fbx);
                renderer.render(scene, camera);
            });
        }
    }
};
</script>