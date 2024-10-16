console.log("ejecutandose logica javascript");
//let table = new DataTable('#myTable');

    
    document.addEventListener('DOMContentLoaded', function () {
        console.log("ejecutandose funcion jquery");
        // Hacer la solicitud a la API usando jQuery
        $.ajax({
            url: 'https://ff735ilwv0.execute-api.us-east-1.amazonaws.com/demo/getData',
            method: 'GET',
            dataType: 'json',
            
            success: function (data) {
                console.log("data",data);

                //select container skills
                const skillsContainer = document.querySelector('.skills-content');
    
                // Itera sobre los datos y genera el HTML dinámicamente
                data.skills.forEach((item) => {
                    console.log("skill"+ item);
                    const skillElement = `
                    <div class="progress">
                        <span class="skill"><span>${item.name}</span> <i class="val">${item.level * 20}%</i></span>
                        <div class="progress-bar-wrap">
                        <div class="progress-bar" role="progressbar" aria-valuenow="${item.level * 20}" aria-valuemin="0" aria-valuemax="100" style="width: ${item.percentage}%;"></div>
                        </div>
                    </div>
                    `;
            
                    // Inserta el HTML generado en el contenedor
                    skillsContainer.innerHTML += skillElement;
                });
            },
            error: function (error) {
                console.error('Error al obtener datos:', error);
            }
        });
    });