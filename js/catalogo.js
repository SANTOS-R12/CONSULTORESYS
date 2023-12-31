$(document).ready(function(){
    $('#cat-carrito').show();
    buscar_producto();
    mostrar_lotes_riesgo()

    function buscar_producto(consulta) {
        funcion = 'buscar';
        $.post('../controlador/ProductoController.php', {consulta, funcion}, (response) => {
            const productos = JSON.parse(response);

            let template = '';
            productos.forEach(producto => {
                template += `
                    <div prodavatar="${producto.avatar}" prodpresentacion="${producto.presentacion_id}" prodtipo="${producto.tipo_id}" prodlaboratorio="${producto.laboratorio_id}" prodadicional="${producto.adicional}" prodconcentracion="${producto.concentracion}" prodprecio="${producto.precio}" prodid="${producto.id}" prodstock="${producto.stock}" prodnombre="${producto.nombre}" class="col-12 col-sm-6 col-md-4 d-flex align-items-stretch">
                        <div class="card bg-light">
                            <div class="card-header text-muted border-bottom-0">
                                <i class="fas fa-lg fa-cubes mr-2"></i>${producto.stock}
                            </div>
                            <div class="card-body pt-0">
                                <div class="row">
                                    <div class="col-7">
                                        <h2 class="lead"><b>Codigo: ${producto.id}</b></h2>
                                        <h2 class="lead"><b>${producto.nombre}</b></h2>
                                        <h4 class="lead"><b><i class="fas fa-lg fa-dollar-sign mr-2"></i> ${producto.precio}</b></h4>
                                        
                                        <ul class="ml-4 mb-0 fa-ul text-muted">
                                            <li class="small"><span class="fa-li"><i ></i></span> Concentracion: ${producto.concentracion}</li>
                                            <li class="small"><span class="fa-li"><i ></i></span> Adicional: ${producto.adicional}</li>
                                            <li class="small"><span class="fa-li"><i ></i></span> Marca: ${producto.laboratorio}</li>
                                            <li class="small"><span class="fa-li"><i ></i></span> Tipo: ${producto.tipo}</li>
                                            <li class="small"><span class="fa-li"><i ></i></span> Presentacion: ${producto.presentacion}</li>
                                        </ul>
                                    </div>
                                    <div class="col-5 text-center">
                                        <img src="${producto.avatar}" alt="" class="img-circle img-fluid">
                                    </div>
                                </div>
                            </div>
                            <div class="card-footer">
                                <div class="text-right">
                                    <button class="lote btn btn-sm btn-primary agregar-carrito">
                                        <i class="fas fa-plus-square mr-2"></i> Agregar al carrito
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                `;
            });
            $('#productos').html(template);
        });
    }

    $(document).on('keyup', '#buscar-producto', function(){
        let valor = $(this).val();
        if (valor != '') {
            buscar_producto(valor)
        }else{
            buscar_producto()
        }
    });

    function mostrar_lotes_riesgo() {
        funcion = 'buscar';

        $.post('../controlador/LoteController.php', {funcion}, (response) => {
            const lotes = JSON.parse(response);

            let template = '';

            lotes.forEach(lote => {
                if (lote.estado != 'light') {
                    template += `
                        <tr class="table-${lote.estado}">
                            <td>${lote.id}</td>
                            <td>${lote.nombre}</td>
                            <td>${lote.stock}</td>
                            <td>${lote.laboratorio}</td>
                            <td>${lote.presentacion}</td>
                            <td>${lote.proveedor}</td>
                            <td>${lote.mes}</td>
                            <td>${lote.dia}</td>
                        </tr>
                    `;
                }                
            });
            $('#lotes').html(template);
        });
    }
});