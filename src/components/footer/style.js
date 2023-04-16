import styled from "styled-components";

const Style = styled.div`
background-image:linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246));
color:#fff;
a{
    text-decoration:none;
    opacity:0.5;
    color:#fff;
}
a:hover{
    opacity:1;
}
.bold{
    font-weight:bold;
    margin:15px 0;
    font-size:16px;
}
li{
    font-size:14px;
    margin-top:5px

}
.footer{
    padding:40px;
    display: flex;
    justify-content: space-between;
    .legals{
        margin-left:60px;
        width:30%;
        .privacy{
            opacity:0.5;
        }
    }
    .follow{
        margin-right:60px;
        .hover{
                svg{
                    width:25px;
                    fill:#fff;
                    margin-right:10px; 
                }
            }
        }
    .app{
        margin-left:60px;
    }
}


`
export default Style