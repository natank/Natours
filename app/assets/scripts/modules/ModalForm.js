class ModalForm {
	constructor() {
		this.modalForm = document.querySelector(".modal");
		// Select the controls used to open the modal form
		this.modalFormShowControls = Array.from(document.querySelectorAll("[href='#modal']"));
		// Select the modal form 'close'  button
		this.modalHideButton = document.querySelector(".modal__close");

		this.showModalForm = this.showModalForm.bind(this);
		this.hideModalForm = this.hideModalForm.bind(this);
		
		this.events();

	}

	events() {
		let that = this;
		this.modalFormShowControls.forEach(function(control){
			control.addEventListener("click", that.showModalForm);
		});

		this.modalHideButton.addEventListener("click", this.hideModalForm);

		//Hide the modal upon ESC key press
		document.onkeydown = function(evt) {
		    evt = evt || window.event;
		    var isEscape = false;
		    if ("key" in evt) {
		        isEscape = (evt.key == "Escape" || evt.key == "Esc");
		    } else {
		        isEscape = (evt.keyCode == 27);
		    }
		    if (isEscape) {
		        that.hideModalForm();
		    }
		};
	}

	showModalForm(){
		this.modalForm.classList.remove("modal--closed");
		this.modalForm.classList.add("modal--opened");
	}

	hideModalForm(){
		this.modalForm.classList.remove("modal--opened");
		this.modalForm.classList.add("modal--closed");
	}
}

export default ModalForm;