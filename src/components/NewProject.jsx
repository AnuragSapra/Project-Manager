import {useRef} from "react"
import Input from "./Input";
import Modal from "./Modal";

export default function NewProject({onAdd, onCancel}) {
    const modal = useRef();

    const title = useRef();
    const description = useRef();
    const dueDate = useRef();

    function handelSave() {
        const eneteredTitle = title.current.value
        const eneteredDescription = description.current.value
        const eneteredDueDate = dueDate.current.value

        if(eneteredTitle.trim() === '' || eneteredDescription.trim() === '' || eneteredDueDate.trim() === '') {
            modal.current.open();
            return;
        }

        onAdd({
            title: eneteredTitle,
            description: eneteredDescription,
            dueDate: eneteredDueDate
        });
    }

    return(
        <>
        <Modal ref={modal} buttonCaption="Close">
            <h2 className="text-xl font-bold text-stone-700 my-4">Invalid Input</h2>
            <p className="text-stone-600 mb-4">Oops... looks like you forgot to enter a value.</p>
            <p className="text-stone-600 mb-4">Please make sure you enter a valid value for every input field.</p>
        </Modal>
        <div className="w-[35rem] mt-16">
            <menu className="flex items-center justify-end gap-4 my-4">
                <li><button className="text-stone-800 hover:text-stone-950" onClick={onCancel}>Cancel</button></li>
                <li><button 
                className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
                onClick={handelSave}
                >Save</button></li>
            </menu>
            <div>
                <Input ref={title} label="Title" type="text"/>
                <Input ref={description} label="Description" isTextArea />
                <Input ref={dueDate} label="Due Date" type="date" />
            </div>
        </div>
        </>
    )
}