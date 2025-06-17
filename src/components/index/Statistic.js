
export default function Statistic({data}) {
    const statistics = data;
//     [
// {id:0 ,title:"Products" ,number:'10,000'},
// {id:1 ,title:"Active Ads" ,number:'500,000'},

// {id:2 ,title:"Sells" ,number:'100,000'},

// {id:3 ,title:"Store" ,number:'700'},

//     ];
  return (
<section className="statistic-section">
<div className="container statistic-section-container">
{statistics.slice(0,4).map((i)=>(
    <div key={i.id} className=" statistic-section-card">
        <h2 className="statistic-section-card-number">
        {i.number}
        </h2>
        <h2 className="statistic-section-card-title">
            {i.title}
        </h2>
    </div>
))}
</div>
</section>
  )
}
