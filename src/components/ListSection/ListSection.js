import './ListSection.css';

const ListSection = props => {

return(
<div className="list-section">
<ul>

{props.list.map((ele) => <li key={ele.key} >{ele.name + "(" + ele.age + " years old)"}</li>)}

</ul>
</div>

)

}

export default ListSection