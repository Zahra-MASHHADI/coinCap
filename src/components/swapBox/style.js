import styled from "styled-components";

const Style = styled.div`
    ul{
        background-color:#fff;
        padding:20px;
        border-radius: 15px;
        box-shadow: rgba(0, 0, 0, 0.1) 0px 0px 9px;
        height:360px;
        margin-left:30px;
        margin-top:50px;
        .swap{
            display:flex;
            justify-content:space-between;
            font-size:17px;
            font-weight:600;
        }
        .input{
            position: relative;
            label{
                position: absolute;
                top:30px;
                left:10px;
                color:gray;
            }
            input{
                height:95px;
                width:309px;
                border-radius: 15px;
                border: 1px solid rgb(236, 239, 241);
                background-color:#F9F9F9;
                margin-top:15px;
            }
            input::placeholder{ 
                transform: translateY(25px);
                padding:10px;
                font-size:25px;
            }
            span.icon{
                position: absolute;
                bottom:5px;
                right:10px;
                align-items: center;
                img{
                    width:32px;
                    height:32px;
                }
                p{
                    font-weight:600;
                    margin:12px 7px;
                }
            }
        }
        .font{
            color:rgb(24, 198, 131);
            font-size:22px;
            margin-top:10px;
        }
        button{
            color:#fff;
            background-color:rgb(24, 198, 131);
            width: 100%;
            border:none;
            border-radius:60px;
            padding:20px 0;
            font-weight: 600;
            font-size: 20px ;
            margin-top:20px;
            &:hover{
                background-color: rgb(26, 209, 142);
            }  
        }
        
    }

`
export default Style