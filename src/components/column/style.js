import styled from "styled-components"
const Style = styled.div`
text-align:center;
 table{
    text-align: right;
    margin:0 auto;
    width:100%;
    border-collapse: collapse;
    border-radius:4px;
    background-color:#fff;
    box-shadow :0 1px 2px 0 rgba(34,36,38,.15);
        td , th{
                border-bottom: 1px rgb(176, 174, 174) solid; 
                padding:10px; 
                }
        th{
            font-size:13px;
            font-weight: lighter; 
            color: gray; 
            padding: 15px 10px; 
        &.split{
            padding-left:300px;
        }
    }
        td{
            font-size:15px;
            padding:0 10px;
            a{
                color: black;
                 text-decoration:none;
               }
               a:hover{
                 text-decoration: underline;
               
               }
        }
            .image{
                display:flex;
                gap:20px;
                align-items: center;
                width:50px;
                img{
                    width:30px;
                    height:30px;
                    margin-right:0;
                }
            .nameSymbol{
                text-align:left;
                margin-left:-15px;
                .name{
                    margin-bottom:0;
                }
                .symbol{
                    font-size:12px;
                    font-weight: lighter;
                    color: gray;
                    margin-top:0;

                }
                
            }
        }  
    }
}
.showMoreButton{
    padding-top:25px;
    button{
        box-shadow: rgb(0 0 0 / 40%) 0px 2px 15px -3px;
        background: rgb(24, 198, 131);
        padding:10px 20px;
        transition:all 0.2s;
        border:none;
        border-radius:20px;
        margin-bottom:15px;
        font-size:15px;
        color:#fff;
        &:hover{
            transform:translateY(-5px)
        }
}
`
export default Style