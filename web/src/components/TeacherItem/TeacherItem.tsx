import React from 'react';
import whatsapp from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
    return (
          < article className = "teacher-item" >
        <header>
            <img src="https://i.pinimg.com/originals/cd/0a/5c/cd0a5ca87247fb12660ac128d68ce0dd.jpg" className="profileImg" />
            <div>
                <strong>Diego</strong>
                <span>Química</span>
            </div>
        </header>

        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        <br /><br />
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>

        <footer>
            <p>
                Preço/hora
                            <strong>R$ 500,00</strong>
            </p>
            <button type="button">
                <img src={whatsapp} />
                            Entre em contato
                        </button>
        </footer>
                </article >

    );
}

export default TeacherItem;