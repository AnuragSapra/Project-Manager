import Button from "./Button"

export default function Sidebar({onClick, projects, onSelectProject, selectedProjectId}) {

    function handleClick() {
        alert("You clicked the button")
    }

    return(
        <aside className="w-1/3 h-full px-8 py-8 md:w-72 bg-black text-stone-50">
            <h1 className="pb-12 text-2xl font-bold text-stone-200">Project Manager</h1>
            <h2 className="mb-8 md:text-xl font-bold text-stone-200">YOUR PROJECTS</h2>
            <div>
                <Button onClick={onClick}>+ Add Project</Button>
            </div>
            <ul className="mt-8">
                {projects.map(project =>{
                    let cssClasses = "w-full text-left px-2 py-1 rounded-sm my-1 hover:text-stone-200 hover:bg-stone-800"

                    if(project.id === selectedProjectId){
                        cssClasses += " bg-stone-800 text-stone-200"
                    } else {
                        cssClasses += " text-stone-400"
                    }

                    return (
                        <li key={project.id}>
                        <button 
                            className={cssClasses}
                            onClick={() => onSelectProject(project.id)}>
                            {project.title}
                        </button>
                        </li>
                    )
                })}
            </ul>
        </aside>
    )
} 