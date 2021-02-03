import { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import FormSendingToServer from "../formSendingToServer/formSendingToServer";
import { SceneUtils } from "three/examples/jsm/utils/SceneUtils.js";

class ThreePanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verticesOfCube: [],
      indicesOfFaces: [],
    };
  }

  handleRecivedData = (data) => {
    this.fillGeometryData(data);
    this.scene.remove(this.scene.getObjectByName("cube"));
    this.setParamsCube(this.state);
  };

  fillGeometryData = (data) => {
    for (let key in data) {
      this.setState({ [key]: data[key] });
    }
  };

  setupScene() {
    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.camera = new THREE.PerspectiveCamera(
      70,
      window.innerWidth / window.innerHeight,
      1,
      1000
    );
    this.camera.position.x = 2;
    this.camera.position.y = 2;
    this.camera.position.z = 2;

    this.scene = new THREE.Scene();
    this.material = new THREE.MeshNormalMaterial();
    this.renderer.setSize(
      this.sceneContainer.clientWidth,
      this.sceneContainer.clientWidth
    );
  }

  animate() {
    this.renderer.render(this.scene, this.camera);
    requestAnimationFrame(this.animate.bind(this));
    this.controls.update();
  }

  setParamsCube(params) {
    let geometry = new THREE.PolyhedronBufferGeometry(
      params.verticesOfCube,
      params.indicesOfFaces
    );

    let materials = [
      new THREE.MeshBasicMaterial({
        opacity: 0.7,
        color: 0x03809c,
        transparent: true,
      }),
      new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true }),
    ];

    let cube = SceneUtils.createMultiMaterialObject(geometry, materials);
    cube.name = "cube";
    this.scene.add(cube);
  }

  componentDidMount() {
    this.setupScene();
    this.sceneContainer.appendChild(this.renderer.domElement);
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.animate();
  }

  render() {
    return (
      <div className="threePanel mt-3">
          <FormSendingToServer handleRecivedData={this.handleRecivedData} />
          <div ref={(ref) => (this.sceneContainer = ref)} />
      </div>
    );
  }
}

export default ThreePanel;
