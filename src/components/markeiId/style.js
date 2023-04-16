import styled from "styled-components";

const Style = styled.div`
text-align:center;
table{
    width:100%;
    margin-top:40px;
    background-color:#FFF;
    border-collapse: collapse;
    border:1px solid rgba(34,36,38,.15);
    box-shadow: rgba(0,0,0,0.4) 0px 2px 15px -3px;
    th ,tr , td{
        text-align:left;
        padding:20px;
        border-bottom:1px solid rgba(34,36,38,.15);
    }
    thead{
        tr{
            background-color:#FAFAFA;
            padding:0;
            border:none;
            th{
                font-weight:100;
                font-size:14px;
            }
        }
    }
    tbody{
        svg{
            color:green;
            background-color:green;
            border-radius:50%;
        }
    }
}
button{
    box-shadow: rgba(0,0,0,0.4) 0px 2px 15px -3px;
    background-color:rgb(24, 198, 131) !important;
    border:none;
    color:#fff;
    padding:10px 15px;
    margin:30px 0 ;
    border-radius:50px;
    font-size:15px;
    font-weight:bold;
    transition: all 0.2s;
    &:hover{
        transform: translateY(-2px);
    }
}
`
export default Style