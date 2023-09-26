import "./Header.scss";

export default function Header() {
    return (
        <div className="header">
            <a href="https://google.com">
                <span>I'm link!</span>
                <img src="/images/chart.png"/>
            </a>
            
            <span>I'm SPAN1!</span>
            <span>I'm SPAN2!</span>
            <span>I'm SPAN3!</span>
            <span>I'm SPAN4!</span>
        </div>
    );
}