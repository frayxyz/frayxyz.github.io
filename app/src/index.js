console.log("ejecutandose logica javascript");
let table = new DataTable('#myTable');

    
    document.addEventListener('DOMContentLoaded', function () {
        console.log("ejecutandose funcion jquery");
        // Hacer la solicitud a la API usando jQuery
        $.ajax({
            url: 'https://d0a771ny6f.execute-api.us-east-1.amazonaws.com/demo/getDataDemo',
            method: 'GET',
            dataType: 'json',
            success: function (data) {
                console.log("data",data);
                // Agregar datos a la tabla DataTable
                const table = $('#myTable').DataTable();
                data.forEach(item => {
                    table.row.add([item.id, item.name, item.description]).draw();
                });
            },
            error: function (error) {
                console.error('Error al obtener datos:', error);
            }
        });
    });