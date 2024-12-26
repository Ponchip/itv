document.addEventListener("DOMContentLoaded", () => {
    // Показать секции при загрузке
    const sections = document.querySelectorAll('section');
    sections.forEach((section) => {
        section.classList.add('visible');
    });

    // Обработка отправки формы
    const form = document.getElementById('contact-form');
    const modal = document.getElementById('modal');
    const closeButton = document.querySelector('.close-button');
    const infoBtn = document.getElementById('info-Btn')
    


    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
});

function Btn(){
    const modal = document.getElementById('modal');
    modal.style.display = 'block';
}



///////////////////////////////////Функции для задачи с массивом///////////////////////////////////////////////////////////

function Swap(mas) {
    const n = mas.length; // Получаем размер матрицы (количество строк/столбцов)
    const swapMas = []; // Создаем новый массив для хранения измененной матрицы

    // Проходим по всем строкам матрицы
    for (let i = 0; i < n; i++) {
        swapMas[i] = []; // Создаем новую строку в измененной матрице
        for (let j = 0; j < n; j++) {
            // Если это элемент главной или побочной диагонали, меняем их местами
            if (j === i) {
                swapMas[i][j] = mas[i][n - j - 1]; // Элемент главной диагонали
            } else if (j === n - i - 1) {
                swapMas[i][j] = mas[i][i]; // Элемент побочной диагонали
            } else {
                swapMas[i][j] = mas[i][j]; // Остальные элементы остаются без изменений
            }
        }
    }

    return swapMas; // Возвращаем измененную матрицу
}

function f() {
    // Запрашиваем ввод пользователя
    const input = prompt("Введите квадратную матрицу, строки разделены запятыми, а элементы внутри строки - пробелами:\nПример: 1 2 3, 4 5 6, 7 8 9");

    // Преобразуем ввод в двумерный массив
    const originalArray = input.split(',').map(row => row.trim().split(' ').map(Number));

    // Проверяем, является ли массив квадратным
    const n = originalArray.length;
    if (originalArray.some(row => row.length !== n)) {
        alert("Ошибка: Введенная матрица должна быть квадратной!");
        return;
    }

    const modifiedArray = Swap(originalArray);

    // Выводим оригинальный массив
    let originalText = '';
    for (const row of originalArray) {
        originalText += row.join(' ') + '\n'; // Преобразуем каждую строку и добавляем к тексту
    }

    // Выводим измененный массив
    let modifiedText = '';
    for (const row of modifiedArray) {
        modifiedText += row.join(' ') + '\n'; // То же самое для измененного массива
    }

    // Обновляем элементы на странице
    document.getElementById('originalArray').textContent = originalText;
    document.getElementById('modifiedArray').textContent = modifiedText;
    document.getElementById('arrays').style.display = 'block'; // Показываем блок с массивами
}


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////