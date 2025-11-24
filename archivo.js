

const libros = [
    { id: 1, titulo: "El Principito", autor: "Antoine de Saint-Exupéry", precio: 15.99, imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fes%2Fsearch%2Fel-principito%3Fimage_type%3Dillustration&psig=AOvVaw1zdBviGzyWnbtWjLSHeXhi&ust=1762139774384000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCOi9o6zA0pADFQAAAAAdAAAAABAE" },
    { id: 2, titulo: "Cien Años de Soledad", autor: "Gabriel García Márquez", precio: 18.50, imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fepinvestiga.com%2Fdominical%2Fcien-anos-de-soledad-en-vivo-y-a-todo-color%2F&psig=AOvVaw0pRVMHt4p4EUng-olCFlZG&ust=1762139815709000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCKiwrb_A0pADFQAAAAAdAAAAABAE" },
    { id: 3, titulo: "1984", autor: "George Orwell", precio: 12.99, imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.revistagq.com%2Farticulo%2F1984-george-orwell-novela-aniversario&psig=AOvVaw3q60Jc71Gluxx4F8bfpQg8&ust=1762139841695000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCIC768vA0pADFQAAAAAdAAAAABAE" },
    { id: 4, titulo: "Orgullo y Prejuicio", autor: "Jane Austen", precio: 14.50, imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.primevideo.com%2F-%2Fes%2Fdetail%2FOrgullo-y-prejuicio%2F0J7Y9UVDPJYTG6TM5CJB3KQAA7&psig=AOvVaw3MBiu-jlV5ySfCbSnvtG6I&ust=1762139878878000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCNC9493A0pADFQAAAAAdAAAAABAK" },
    { id: 5, titulo: "El Hobbit", autor: "J.R.R. Tolkien", precio: 19.99, imagen: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fforbes.com.mx%2Fforbes-life%2Fentretenimiento-el-senor-de-los-anillos-datos-desconocidos-20-aniversario%2F&psig=AOvVaw31sg69rBOgLSo1EZ5hv6bE&ust=1762139907478000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCLj7p-vA0pADFQAAAAAdAAAAABAE" },
];

const contenedorLibros = document.getElementById("librosContainer");
const carritoModal = document.getElementById("carritoModal");
const cerrarModal = document.getElementById("cerrarModal");
const carritoBtn = document.getElementById("carritoBtn");
const contadorCarrito = document.getElementById("contadorCarrito");
const itemsCarrito = document.getElementById("itemsCarrito");
const totalCarrito = document.getElementById("totalCarrito");
const comprarBtn = document.getElementById("comprarBtn");

let carrito = [];

libros.forEach(libro => {
    const div = document.createElement("div");
    div.classList.add("libro");
    div.innerHTML = `
        <img src="${libro.imagen}" alt="${libro.titulo}">
        <h3>${libro.titulo}</h3>
        <p>${libro.autor}</p>
        <p><strong>$${libro.precio}</strong></p>
        <button onclick="agregarAlCarrito(${libro.id})">Agregar al carrito</button>
    `;
    contenedorLibros.appendChild(div);
});


function agregarAlCarrito(id) {
    const libro = libros.find(l => l.id === id);
    carrito.push(libro);
    actualizarCarrito();
}


function actualizarCarrito() {
    contadorCarrito.textContent = carrito.length;
    itemsCarrito.innerHTML = "";
    let total = 0;
    carrito.forEach(item => {
        total += item.precio;
        const p = document.createElement("p");
        p.textContent = `${item.titulo} - $${item.precio}`;
        itemsCarrito.appendChild(p);
    });
    totalCarrito.textContent = `Total: $${total.toFixed(2)}`;
}

carritoBtn.onclick = () => carritoModal.style.display = "block";
cerrarModal.onclick = () => carritoModal.style.display = "none";
window.onclick = (e) => { if (e.target == carritoModal) carritoModal.style.display = "none"; };


comprarBtn.onclick = () => {
    alert(" ¡Gracias por su compra!");
    carrito = [];
    actualizarCarrito();
    carritoModal.style.display = "none";
};


document.getElementById("verCatalogo").onclick = () => {
    document.getElementById("catalogo").scrollIntoView({ behavior: "smooth" });
};

