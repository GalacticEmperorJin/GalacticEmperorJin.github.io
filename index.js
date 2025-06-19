const scene = new THREE.Scene()
const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight,0.1,1000)
const renderer = new THREE.WebGLRenderer({antialis:true})

//Basic setup
renderer.setSize(window.innerWidth,window.innerHeight)
renderer.setClearColor("#6495ED") //cornblue
document.body.appendChild(renderer.domElement)

//place camera position
camera.position.z = 5

//handling windowing system based canvas
window.addEventListener('resize',( ) => {
    let width = window.innerWidth
    let height = window.innerHeight
    renderer.setSize(width,height)
    camera.aspect = width/height
    camera.updateProjectionMatrix()
})

//define basic geometry plot

//first object
var geometry = new THREE.BoxGeometry(2,2,2)
// var material = new THREE.MeshBasicMaterial({color:"0xff0051"})
var material = new THREE.MeshStandardMaterial({color: "0xFFC0CB",flatshading: true, metalness:0.5,roughness:1})
var cube = new THREE.Mesh(geometry,material)

//second object
var geometry = new THREE.BoxGeometry(3,3,3)
var material = new THREE.MeshBasicMaterial({color: "0xFFC0CB", wireframe: true,transparent:true})
var wireframeCube = new THREE.Mesh(geometry,material)

//add to the creted scene
scene.add(cube)
scene.add(wireframeCube)

//lighting
var ambientLight = new THREE.AmbientLight(0xffffff,0.5)
scene.add(ambientLight)

var pointLight = new THREE.PointLight(0xffffff,1)
pointLight.position.set(25,50,25)
scene.add(pointLight) 

//animate our object
function animate(){
    requestAnimationFrame(animate)
    cube.rotation.x += 0.01
    cube.rotation.y += 0.01

    wireframeCube.position.x = 4.0
    wireframeCube.rotation.x -= 0.01
    wireframeCube.rotation.y -= 0.01
    //wireframeCube.position.x = 4.0
    //plot/render our objects
    renderer.render(scene,camera)
}

animate()
