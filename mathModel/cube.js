const verticesOfCubeMap = [
    -1,-1,-1,    1,-1,-1,    1, 1,-1,    -1, 1,-1,
    -1,-1, 1,    1,-1, 1,    1, 1, 1,    -1, 1, 1,
];

const indicesOfFaces = [
    2,1,0,    0,3,2,
    0,4,7,    7,3,0,
    0,1,5,    5,4,0,
    1,2,6,    6,5,1,
    2,3,7,    7,6,2,
    4,5,6,    6,7,4
];

function setCoordinateVerticesOfCube(paramsLWH) {
    return verticesOfCubeMap.map((item, index) => {
        switch ((index+1) % 3) {
          case 0: {
            item *= (paramsLWH.height/2);
            break;
          }
          case 1: {
            item *= (paramsLWH.length/2);
            break;
          }
          case 2: {
            item *= (paramsLWH.width/2);
            break;
          }
        }
        return item;
      });
};

module.exports = {
  indicesOfFaces,
  setCoordinateVerticesOfCube};

