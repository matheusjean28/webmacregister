import "./ContentsStyles/InteractiveLIStyles.css";

export default function InteractiveLI({ selectLiId, macs }) {
    console.log(selectLiId);
    console.log(macs[selectLiId]);

    return (
        <>
            <div className="InteractiveLIConteiner">
                <h3>{macs[selectLiId].model }</h3>
                <h3>{macs[selectLiId].mac }</h3>
                <h3>{macs[selectLiId].problem }</h3>
            </div>
        </>
    );
}
