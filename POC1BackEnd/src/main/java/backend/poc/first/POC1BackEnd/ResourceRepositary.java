package backend.poc.first.POC1BackEnd;

import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;
															//<file name,Datatypes-Wrapper class Must>
@Repository
public interface ResourceRepositary extends CrudRepository <Resource, Integer>
{
	

}
