<script>
	import selfIcon from '$lib/assets/pic.jpg'

	import pythonIcon from '$lib/assets/python-svgrepo-com.svg'
	import sqlIcon from '$lib/assets/sql-file-format-svgrepo-com.svg'
	import databricksIcon from '$lib/assets/databricks-vector-logo-2022.svg'
	import airflowIcon from '$lib/assets/airflow-svgrepo-com.svg'
	import azureIcon from '$lib/assets/azure-svgrepo-com.svg'
	import gcpIcon from '$lib/assets/gcp-svgrepo-com.svg'
	import pysparkIcon from '$lib/assets/pyspark-logo.svg'
	import dockerIcon from '$lib/assets/docker-svgrepo-com.svg'

    const skills = {
    languages: ["Python", "SQL", "Vue", "Typescript", 
                   "Latex", "Bash"],
    data_engg: ["HighCharts", "DuckDB", "Apache Spark", 
                    "Pandas", "Matplotlib", "Seaborn"],
    dev_tools: ["Docker", "Airflow", "Kubernetes", 
                    "ArgoCD", "CircleCI", "WebPack"]
}
</script>

<div class="picture-frame">
	<img src={selfIcon} alt="Portrait of self">
</div>
<div class="container">
	<main>
		<h1>About</h1>
		<p>
			I'm a Data Engineer with capabilities in <b>Big Data </b>, <b>MLOps</b>, and self-serve <b> Analytics </b>.
            Work experience has been in game development, research/academe, and telecommunications. I've worked with all sorts of data, 
            and my strengths are in problem solving, high level thinking, and communication. 
            
            <br>
            <br>
            Outside work, I am a seasoned athlete -- weighted calisthenics, running, climbing, powerlifting 🏃‍♂️🏋️‍♂️--,gamer, and a cat lover 🐱.
		</p>
			<br>
		<h1>My main tools are...</h1>

		<div class="grid">
			<div class="grid-item">
				<img src={pythonIcon} alt="Python" class="logo" style="width: 150px; height: 130px;" />
			</div>
			<div class="grid-item">
				<img src={sqlIcon} alt="SQL" style="width: 100px; height: 100px;" />
			</div>
			<div class="grid-item">
				<img src={pysparkIcon} alt="PySpark" style="width: 120px; height: 120px;" />
			</div>
			<div class="grid-item">
				<img src={databricksIcon} alt="Databricks" style="width: 150px; height: 120px;" />
			</div>
		</div>
		<div class="grid">
			<div class="grid-item">
				<img src={airflowIcon} alt="Apache Airflow" style="width: 120px; height: 120px;" />
			</div>
			<div class="grid-item">
				<img src={azureIcon} alt="Microsoft Azure" style="width: 120px; height: 120px;" />
			</div>
			<div class="grid-item">
				<img src={gcpIcon} alt="Google Cloud Platform" style="width: 120px; height: 120px;" />
			</div>
			<div class="grid-item">
				<img src={dockerIcon} alt="Docker" style="width: 120px; height: 120px;" />
			</div>
		  </div>
	</main>

</div>

<style>
	.container {
		max-width: 900px;
		padding: 0;
		display: flex;
		justify-content: center;
	}

	main {
		max-width: 100%;
		min-height: 500px;
		text-align: left;
		margin: 0 auto;
		box-sizing: border-box;
	}

	h1 {
		font-weight: 700;
		margin: 0 0 50px 0;
		font-size: 36px;
		text-align: start;
	}
	.picture-frame {
		width: 350px; 
		height: 350px; 
		border-radius: 50%; 
		overflow: hidden; 
		display: flex;
		justify-content: center;
		align-items: center;
		border: 2px solid black; /* optional border */
	}

	.picture-frame img {
		max-width: 100%;
		max-height: 135%;
		object-fit: cover; 
	}
	.grid {
		display: grid;
		grid-template-columns: repeat(4, 1fr); 
		gap: 30px; 
	}

	.grid-item {
		padding: 20px;
		text-align: center;
	}
</style>