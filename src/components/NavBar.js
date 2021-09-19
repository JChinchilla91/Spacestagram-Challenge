import React from 'react';

const NavBar = () => {
    return(
    <>
        <div align='center'>     
            <table width="800" cellSpacing="0" cellPadding="5" border="0" bgcolor="003399" align="center">
                <tbody>
                    <tr>
                        <td>
                            <a href='/' className="navbar" ><font color="FFFFFF">MySpaceStagram.com</font></a>&nbsp;<font color="FFFFFF">|</font>&nbsp;
                            <a href='/' className="navbar"><font color="FFFFFF">Home</font></a>
                        </td>	
                        <td align="left">
                            <font color="FFFFFF">The Web 
                            <input type="radio" name="searchtype" value="web"/> MySpaceStagram
                            <input type="radio" name="searchtype" value="myspace" /> 
                            <input name="searchrequest" type="text" size="25" maxLength="75" />&nbsp;&nbsp;&nbsp;<input type="submit" value="Search" />
                            </font>
                        </td>
                        <td align="right">
                            <a className="man" href="/"><font color="FFFFFF">Help</font></a> <font size="1" color="FFFFFF">|</font>&nbsp;
                            <a className="man" href="/"><font color="#ffffff">SignUp</font></a>&nbsp;</td>
                    </tr>      
                </tbody>
            </table>
            
            <table width="800" cellSpacing="0" cellPadding="0" border="0" align="center">
                <tbody><tr>
                    <td valign="top" height="96" bgcolor="003399" align="center">
                    </td>
                </tr>
                </tbody>
            </table>

        </div>
        <div align='center'>


<table width="800" cellSpacing="0" cellPadding="0" border="0">
	<tbody><tr>
			<td width="800" height="26" bgcolor="6698CB">
			<table width="800" height="26" cellSpacing="0" cellPadding="0" border="0">
				<tbody><tr valign="middle">
					<td align="center"><font face="Arial, Helvetica, sans-serif" color="#000000">
					<a className="navbar" href="/">Home</a>
					&nbsp;|&nbsp;
					<a className="navbar" href="/">Browse</a> 
					&nbsp;|&nbsp;

					<a className="navbar" href="/">Search</a>
					&nbsp;|&nbsp;
					<a className="navbar" href="/">Invite</a>
					&nbsp;|&nbsp;
					<a className="navbar" href="/">Film</a>
					&nbsp;|&nbsp;

					<a className="navbar" href="/">Mail</a>
					&nbsp;|&nbsp;
					<a className="navbar" href="/">Blog</a>
					&nbsp;|&nbsp;
					<a className="navbar" href="/">Favorites</a>
					&nbsp;|&nbsp;

					<a className="navbar" href="/">Forum</a>
					&nbsp;|&nbsp;
					<a className="navbar" href="/">Groups</a>
					&nbsp;|&nbsp;
					<a className="navbar" href="/">Events</a>
					&nbsp;|&nbsp;

					
					<a className="navbar" href="/">Videos</a>
					&nbsp;|&nbsp;
					<a className="navbar" href="/">Music</a>
					&nbsp;|&nbsp;
					<a className="navbar" href="/">Classifieds</a>
					
					</font>

					</td>
				</tr>
			</tbody></table>
		</td>
	</tr>
</tbody></table>


        </div>
    </>
    )
}

export default NavBar;