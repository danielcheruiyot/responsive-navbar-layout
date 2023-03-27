       window.onload = function() {
            const toggleBtn = document.querySelector('.togge-btn');
            const toggleBtnIcon = document.querySelector('.togge-btn i');
            const dropDownMenu = document.querySelector('.dropdown-menu');

        

            toggleBtn.onclick = function() {
                dropDownMenu.classList.toggle('open')
                const isOpen = dropDownMenu.classList.contains('open')

                toggleBtnIcon.classList = isOpen ? 'fa-solid fa-xmark toggle-btn-i' : 'fa-solid fa-bars toggle-btn-i'
            }

       } 