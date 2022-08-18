import "./Button.scss";

export function Button({className, ...props}) {
    return <button className={"button " + className} {...props}/>;
}