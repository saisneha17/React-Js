import './loader.css';

function Loader() {
    return (
        <div class="circle-container">
            <svg fill="none" class="circle-svg" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                <circle class="circle" cx="50" cy="50" r="45" />
            </svg>
        </div>
    )
}

export default Loader;