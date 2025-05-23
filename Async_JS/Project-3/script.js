const keycode = document.getElementById('key_code');

window.addEventListener('keydown', (e)=> {
  keycode.innerHTML = `<div>
        <table>
        <tr>
            <th>Key</th>
            <th>Keycode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
        </table>
    </div>`;
});
