import Button from "../components/Button";
import { GoBell, GoCloudDownload, GoDatabase } from "react-icons/go";

function ButtonPage() {
    return <div>
        <div>
            <Button primary outline rounded className = "mb-5 ">
                <GoBell />
                Click Me!
            </Button>
        </div>
        <div>

            <Button secondary outline>
                <GoCloudDownload />
                Buy Now!
            </Button>
        </div>
        <div>
            <Button warning>
                <GoDatabase />
                See Deals!
            </Button>
        </div>
        <div>
            <Button danger>Hide Ads!</Button>
        </div>
        <div>
            <Button success>Something</Button>
        </div>
    </div>
}

export default ButtonPage;