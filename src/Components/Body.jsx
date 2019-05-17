import React, { Component } from 'react';

export class Body extends Component {
	render() {
		return (
			<div class='jumbotron'>
				<h1 class='display-4'>Hello, world!</h1>
				<p class='lead'>
					Bacon ipsum dolor amet short loin buffalo rump tenderloin,
					burgdoggen leberkas pork bresaola pig cupim frankfurter.
					Drumstick pork belly tenderloin landjaeger, strip steak
					swine flank t-bone ribeye filet mignon leberkas cupim pig.
				</p>
				<hr class='my-4' />
				<p>
					Boudin pork chop t-bone pork loin flank, short ribs doner
					shoulder fatback salami. Ribeye ham filet mignon tri-tip.
				</p>
				<a class='btn btn-primary btn-lg' href='/' role='button'>
					Learn more
				</a>
			</div>
		);
	}
}
