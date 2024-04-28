let tableCount = 1;

function addRow(tableId) {
  var table = document.getElementById(tableId);
  var newRow = table.insertRow(-1);
  var cell1 = newRow.insertCell(0);
  var cell2 = newRow.insertCell(1);
  var cell3 = newRow.insertCell(2);
  var cell4 = newRow.insertCell(3);
  cell1.innerHTML = `<div class="input-group"><input type="text" class="form-control" placeholder="Ex: Exercício" aria-label="Ex_name" aria-describedby="basic-addon1"></div>`;
  cell2.innerHTML = `<div class="input-group"><input type="text" class="form-control" placeholder="Ex: Séries" aria-label="Ex_name" aria-describedby="basic-addon1"></div>`;
  cell3.innerHTML = `<div class="input-group"><input type="text" class="form-control" placeholder="Ex: Repetições" aria-label="Ex_name" aria-describedby="basic-addon1"></div>`;
  cell4.innerHTML = `<div class="input-group"><input type="text" class="form-control" placeholder="Ex: Descanso" aria-label="Ex_name" aria-describedby="basic-addon1"></div>`;
}

function addTable() {
  tableCount++;
  var tablesContainer = document.getElementById('tables-container');
  var newTableHTML = `
  <h2 class="text-white col-2" style="margin-left: -1100px; margin-top: 0px; margin-bottom: -20px;">
  <div class="input-group">
    <input type="text" class="form-control" placeholder="Ex: Segunda" aria-label="Ex_name" aria-describedby="basic-addon1">
  </div>
  </h2>
  <table id="tabela-treinos-${tableCount}" class="table mt-5 w-75 table-dark table-bordered">
    <thead class="">
      <tr class="text-center table-active ">
        <th scope="col">Exercicios</th>
        <th scope="col">Séries</th>
        <th scope="col">Repetições</th>
        <th scope="col">Descanso</th>
      </tr>
    </thead>
    
    <tbody class="text-center">
      <tr>
        <td>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Ex: Supino reto" aria-label="Ex_name" aria-describedby="basic-addon1">
          </div>
        </td>
        <td>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Ex: 3x" aria-label="Ex_name" aria-describedby="basic-addon1">
          </div>
        </td>
        <td>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Ex: 8-10" aria-label="Ex_name" aria-describedby="basic-addon1">
          </div>
        </td>
        <td>
          <div class="input-group">
            <input type="text" class="form-control" placeholder="Ex: 60-90 segundos" aria-label="Ex_name" aria-describedby="basic-addon1">
          </div>
        </td>
      </tr>
    </tbody>
  </table>
  <button type="button" class="btn btn-success mb-4" onclick="addRow('tabela-treinos-${tableCount}')">Adicionar treino</button>
  `;
  tablesContainer.insertAdjacentHTML('beforeend', newTableHTML);
}