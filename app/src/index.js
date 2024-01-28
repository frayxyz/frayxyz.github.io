console.log("ejecutandose logica javascript");
let table = new DataTable('#myTable');

document.addEventListener('DOMContentLoaded', function () {
    console.log("ejecutandose funcion addeventlistener");
    // Hacer la solicitud a la API
    fetch('https://d0a771ny6f.execute-api.us-east-1.amazonaws.com/demo/getDataDemo')
        .then(response =>{ 
            console.log("respuesta servicio aws -> ",response);
            return response.json();})
        .then(data => {
            // Agregar datos a la tabla DataTable
            const table = $('#myTable').DataTable();
            data.forEach(item => {
                table.row.add([item.id, item.name, item.description]).draw();
            });
        })
        .catch(error => console.error('Error al obtener datos:', error));
});