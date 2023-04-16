import styled from "styled-components";

const Style = styled.div`

.infor{
    
    display:flex;
    justify-content: space-between;
    .coinDetail{
        display:flex;
        align-items: end;
        img{
            margin-right:20px;
        }
        span{
            margin-right:100px;
            .symbol{
                font-weight:500;
                font-size:20px;
                margin-bottom:0;
            }
            .moment{
                margin-bottom:0;
            }
        }
    }
   .num{
    font-weight:500;
   }
    .title{
        margin-right:15px;
        color:gray;
        font-weight:500;
    }
}
.chart{
    margin-top:20px;
    width:739px;
    height:380px;
    text-decoration: none;
    button{
        color:rgb(24, 198, 131);
        border: none;
        padding:7px 15px;
        border-radius: 20px;
        margin:20px 7px;
        font-size:12px;
        font-weight:bold;
        background-color:#fff;
        &:hover{
            background-color:rgb(24, 198, 131) ;
            color:white;
        }
    }
}

`
export default Style