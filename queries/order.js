const orderQueries =
  "select i.order_id,r.user_id,r.order_date ,sum(i.total_amount )as total_amount_in_Order from ordereditems i left join orders r on r.order_id=i.order_id where i.order_id=$1 group by i.order_id, r.order_date,r.user_id";
module.exports={orderQueries};