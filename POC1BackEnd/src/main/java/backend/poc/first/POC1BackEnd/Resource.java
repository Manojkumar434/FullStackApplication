package backend.poc.first.POC1BackEnd;


import java.util.Arrays;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;

@Entity
public class Resource 
{
	@javax.persistence.Id @GeneratedValue(strategy = GenerationType.IDENTITY)
	private int Id;
	private String proFname;
	private int proYoung;
	private float proSal;
	private String proCity1;
	private String[] proYes;
	@Override
	public String toString() {
		return "Resource [Id=" + Id + ", proFname=" + proFname + ", proYoung=" + proYoung + ", proSal=" + proSal
				+ ", proCity1=" + proCity1 + ", proYes=" + Arrays.toString(proYes) + "]";
	}
	public Resource() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Resource(String proFname, int proYoung, float proSal, String proCity1, String[] proYes) {
		super();
		this.proFname = proFname;
		this.proYoung = proYoung;
		this.proSal = proSal;
		this.proCity1 = proCity1;
		this.proYes = proYes;
	}
	public int getId() {
		return Id;
	}
	public void setId(int id) {
		Id = id;
	}
	public String getProFname() {
		return proFname;
	}
	public void setProFname(String proFname) {
		this.proFname = proFname;
	}
	public int getProYoung() {
		return proYoung;
	}
	public void setProYoung(int proYoung) {
		this.proYoung = proYoung;
	}
	public float getProSal() {
		return proSal;
	}
	public void setProSal(float proSal) {
		this.proSal = proSal;
	}
	public String getProCity1() {
		return proCity1;
	}
	public void setProCity1(String proCity1) {
		this.proCity1 = proCity1;
	}
	public String[] getProYes() {
		return proYes;
	}
	public void setProYes(String[] proYes) {
		this.proYes = proYes;
	}
	
	
}