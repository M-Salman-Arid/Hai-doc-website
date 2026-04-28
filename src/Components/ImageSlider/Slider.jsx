import "./Slider.css";
import s1 from "../../assets/s1.png";
import s2 from "../../assets/s2.png";
import s3 from "../../assets/s3.png";
import s4 from "../../assets/s4.png";
import s5 from "../../assets/s5.png";

export default function Slider() {
    return (
        <div class="slider">
            <div class="track">
                <img src={s1} />
                <img src={s2} />
                <img src={s3} />
                <img src={s4} />
                <img src={s5} />

                <img src={s1} />
                <img src={s2} />
                <img src={s3} />
                <img src={s4} />
                <img src={s5} />
            </div>
        </div>

    );
}